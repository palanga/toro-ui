import React from "react"
import { Asset, PriceAmount } from "./Asset";
import { Card, Paper, Typography } from "@material-ui/core";

export function StockPriceCard(props: Asset) {
  return (
    <Paper>
      <PrimaryPrice price={props.price.ars} />
      {props.price.usd && <SecondaryPrice price={props.price.usd}/>}
      {props.price.usdc && <SecondaryPrice price={props.price.usdc}/>}
    </Paper>
  )
}

function PrimaryPrice(props: { price: PriceAmount }) {
  return <Typography>{props}</Typography>
}

function SecondaryPrice(props: { price: PriceAmount }) {
  return <Typography>{props}</Typography>
}
