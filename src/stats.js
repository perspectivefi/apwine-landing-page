const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwNzYxMTQzMiwiZXhwIjoxOTIzMTg3NDMyfQ.qWHnaR_17rDiB0hZ5iW2XBsMHdee0_IEKaKEoX1c3cs"

export const getTVL = async () => {
  try {
    const res = await (
      await fetch(
        `https://ktxwjanlsepwgzgafzzg.supabase.co/rest/v1/rpc/get_global_stats`,
        {
          method: "GET",
          headers: {
            apiKey: SUPABASE_API_KEY,
          },
        }
      )
    ).json()
    return res.find(v => v.vaultid === "AMM").tvl
  } catch (e) {
    console.error(e)
    return null
  }
}
