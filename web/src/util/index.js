export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// export const formatDate = (date) => {
//   return format(date, "dd'/'MM'/'yyyy", { locale: pt });
// };
