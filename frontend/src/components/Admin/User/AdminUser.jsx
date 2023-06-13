import { Container, Stack, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UserTable from "./UserTable";

export default function AdminUser() {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" gutterBottom>
          User
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          New User
        </Button>
      </Stack>

      <UserTable />
    </Container>
  );
}
