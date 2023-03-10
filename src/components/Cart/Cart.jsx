import React, { useContext, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { cartContext } from "../Context/CartContextProvider";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ paddingTop: "65px", borderRadius: "0" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Img</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Count</StyledTableCell>
            <StyledTableCell align="center">subPrice</StyledTableCell>
            <StyledTableCell align="center">-</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow key={row.item.id}>
              <StyledTableCell align="center">
                <img src={row.item.img} alt="" width={70} height={70} />
              </StyledTableCell>
              <StyledTableCell align="center">{row.item.name}</StyledTableCell>
              <StyledTableCell align="center">
                {row.item.category}
              </StyledTableCell>
              <StyledTableCell align="center">{row.item.price}</StyledTableCell>
              <StyledTableCell align="center">
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={row.count}
                  onChange={(e) => {
                    changeProductCount(e.target.value, row.item.id);
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="center">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  sx={{
                    backgroundColor: "#ff6c48",
                    "&:hover": {
                      background: "red",
                    },
                    color: "white",
                  }}
                  onClick={() => deleteCartProduct(row.item.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#ff6c48",
            "&:hover": {
              background: "red",
            },
            color: "white",
            marginTop: "10px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
          onClick={cartCleaner}
        >
          Clear All
        </Button>

        <Button
          sx={{
            backgroundColor: "#ff6c48",
            "&:hover": {
              background: "red",
            },
            color: "white",
            marginRight: "15px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Order {cart.totalPrice}$
        </Button>
        <Button
          sx={{
            backgroundColor: "#ff6c48",
            "&:hover": {
              background: "red",
            },
            color: "white",
            marginTop: "10px",
            marginBottom: "10px",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Go Home
        </Button>
      </div>
    </TableContainer>
  );
}
