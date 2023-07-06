import { DataGrid } from "@mui/x-data-grid";
import {
  Container,
  Stack,
  Typography,
  Button,
  Modal,
  Box,
  Link,
  Tooltip,
  IconButton,
} from "@mui/material";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ApiHelper from "../../../services/apiHelper";
import SheetForm from "./SheetForm";

export default function AdminUser() {
  const [tastingSheet, setTastingSheet] = React.useState([]);
  const [loadingSheet, setLoadingSheet] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  React.useEffect(() => {
    ApiHelper("tastingsheets", "get")
      .then((res) => {
        setTastingSheet(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [loadingSheet]);

  const handleDelete = (id) => {
    ApiHelper(`tastingsheets/${id}`, "delete", {}, "")
      .then(() => {
        setLoadingSheet((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  const processRowUpdate = React.useCallback((updateSheet) => {
    const {
      id,
      degustationDate,
      shape,
      eye,
      nose,
      mouth,
      conclusion,
      note,
      commentaire,
    } = updateSheet;
    ApiHelper(`tastingsheets/${id}`, "put", {
      degustation_date: degustationDate,
      shape,
      eye,
      nose,
      mouth,
      conclusion,
      note,
      commentaire,
    })
      .then(() => {
        setLoadingSheet((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
    return updateSheet;
  }, []);

  const handleProcessRowUpdateError = React.useCallback((error) => {
    console.error(error);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "degustation_date",
      headerName: "Date de dégustation",
      width: 110,
      editable: true,
    },
    {
      field: "shape",
      headerName: "Forme",
      width: 110,
      editable: true,
    },
    {
      field: "eye",
      headerName: "Visuel",
      width: 110,
      editable: true,
    },
    {
      field: "nose",
      headerName: "Nez",
      width: 110,
      editable: true,
    },
    {
      field: "mouth",
      headerName: "Bouche",
      width: 150,
      editable: true,
    },
    {
      field: "conclusion",
      headerName: "Conclusion",
      width: 150,
      editable: true,
    },
    {
      field: "note",
      headerName: "Note",
      width: 110,
      editable: true,
    },
    {
      field: "commentaire",
      headerName: "Commentaire",
      width: 110,
      editable: true,
    },
    {
      field: "delete",
      headerName: "Supprimer",
      width: 80,
      editable: false,
      sortable: false,
      renderCell: (params) => (
        <Tooltip>
          <IconButton
            onClick={() => {
              handleDelete(params.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        my={5}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Link
            href="/admin"
            underline="hover"
            color="text.primary"
            sx={{ p: "10px" }}
          >
            Dashboard
          </Link>
          <p style={{ padding: "10px" }}>/</p>
          <Link
            href="/admin/tasting_sheet"
            underline="none"
            color="text.primary"
            sx={{ p: "10px" }}
          >
            Tasting Sheet
          </Link>
        </Box>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          startIcon={<AddIcon />}
        >
          New Tasting Sheet
        </Button>
      </Stack>

      <DataGrid
        rows={tastingSheet}
        columns={columns}
        editMode="row"
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10, 25]}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        autoHeight
        disableRowSelectionOnClick
      />

      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "background.secondary",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajoutez une nouvelle fiche de dégustation
          </Typography>
          <SheetForm
            closeModal={handleCloseModal}
            setLoading={setLoadingSheet}
          />
        </Box>
      </Modal>
    </Container>
  );
}
