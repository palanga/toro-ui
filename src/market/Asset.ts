
export type Asset = {
  ticker: string,
  name: string,
  description: string,
  price: {
    ars: PriceAmount,
    usd?: PriceAmount,
    usdc?: PriceAmount,
  },
}

export type PriceAmount = number
