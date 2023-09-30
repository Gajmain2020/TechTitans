import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchRequests } from "../../Api/user";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { approveRequest } from "../../Api/borrower";

export default function HomepageFaculty() {
  const id = useLocation().pathname.split("/")[2];
  console.log(id);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetchRequests()
      .then((res) => setUsers(res.users))
      .catch((err) => alert(err.messsage));
  }, []);

  function handleApprove(id) {
    setUsers((users) => users.filter((user) => user._id !== id));
    approveRequest(id).then((res) => alert(res.message));
  }

  return (
    <div>
      {users ? (
        <>
          <div className="w-1/2 mx-auto mt-10">
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "gray" }}>
                    <TableCell>S. No.</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">URN</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Approve</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((row, idx) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {idx + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.urn}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => handleApprove(row._id)}>
                          <CheckIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        <>Loding...</>
      )}
    </div>
  );
}
