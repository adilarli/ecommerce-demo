export default function (data, discount) {
  const output = new Intl.NumberFormat("tr-TR", {
    currency: "TRY",
    minimumFractionDigits: 2,
  });
  return `${discount ? "-" : ""}${output.format(data)} TL`;
}
