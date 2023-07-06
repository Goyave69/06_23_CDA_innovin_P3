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
import WineForm from "./WineForm";

export default function AdminWine() {
  const [wines, setWines] = React.useState([]);
  const [loadingWines, setLoadingWines] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  React.useEffect(() => {
    ApiHelper("wines", "get")
      .then((res) => {
        setWines(res.data);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  }, [loadingWines]);

  const handleDelete = (id) => {
    ApiHelper(`wines/${id}`, "delete", {}, "")
      .then(() => {
        setLoadingWines((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
  };

  const processRowUpdate = React.useCallback((updateWine) => {
    const {
      id,
      name,
      year,
      wine_type: wineType,
      origin_country: originCountry,
      region,
      grape_variety: grapeVariety,
      description,
      bestSeller,
      image,
      price,
    } = updateWine;
    ApiHelper(`wines/${id}`, "put", {
      name,
      year,
      wine_type: wineType,
      origin_country: originCountry,
      region,
      grape_variety: grapeVariety,
      description,
      best_seller: bestSeller === 1,
      image,
      price,
    })
      .then(() => {
        setLoadingWines((prev) => !prev);
      })
      .catch((err) => {
        console.error(`Axios Error : ${err.message}`);
      });
    return updateWine;
  }, []);

  const handleProcessRowUpdateError = React.useCallback((error) => {
    console.error(error);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Nom",
      width: 110,
      editable: true,
    },
    {
      field: "year",
      headerName: "Année",
      width: 110,
      editable: true,
    },
    {
      field: "wine_type",
      headerName: "Type de vin",
      width: 110,
      editable: true,
    },
    {
      field: "origin_country",
      headerName: "Pays d'origin",
      width: 110,
      editable: true,
    },
    {
      field: "region",
      headerName: "Région",
      width: 150,
      editable: true,
    },
    {
      field: "grape_variety",
      headerName: "Variété de grappe",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 110,
      editable: true,
    },
    {
      field: "best_seller",
      headerName: "Meilleure vente",
      width: 110,
      editable: true,
    },
    {
      field: "image",
      headerName: "Image",
      width: 110,
      editable: true,
    },
    {
      field: "price",
      headerName: "Prix",
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
            href="/admin/wine"
            underline="none"
            color="text.primary"
            sx={{ p: "10px" }}
          >
            Wine
          </Link>
        </Box>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          startIcon={<AddIcon />}
        >
          New Wine
        </Button>
      </Stack>

      <DataGrid
        rows={wines}
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
            Ajoutez un nouveau vin
          </Typography>
          <WineForm
            closeModal={handleCloseModal}
            setLoading={setLoadingWines}
          />
        </Box>
      </Modal>
    </Container>
  );
}
