import * as Yup from "yup";

export const schema: any = Yup.object().shape({
  city: Yup.string().required("Campo obrigatório"),
  uf: Yup.string().required("Campo obrigatório").max(2),
});

export const fields: any = [
  {
    placeHolder: "Digite o estado",
    label: "",
    name: "uf",
  },
  {
    placeHolder: "Digite a cidade",
    label: "",
    name: "city",
  },
];
