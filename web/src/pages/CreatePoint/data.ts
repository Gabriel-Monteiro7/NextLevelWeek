import * as Yup from "yup";
import { FaUser, FaEye } from "react-icons/fa";

export const schema: any = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .required("Campo obrigatório")
    .email("Digite um email válido"),
  whatsapp: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  uf: Yup.string().required("Campo obrigatório").max(2),
  district: Yup.string(),
  road: Yup.string(),
  number: Yup.string(),
  complement: Yup.string(),
});

export const fields: any = [
  [
    {
      placeHolder: "Digite o nome da entidade",
      label: "Nome da entidade *",
      name: "name",
      width: 100,
    },
    {
      placeHolder: "Digite seu email",
      label: "Email *",
      name: "email",
      width: 50,
    },
    {
      placeHolder: "Digite seu whatsapp",
      label: "Whatsapp *",
      name: "whatsapp",
      width: 48,
    },
  ],
  [
    {
      placeHolder: "Digite o nome da rua",
      label: "Rua",
      name: "road",
      width: 80,
    },
    {
      placeHolder: "",
      label: "Número",
      name: "number",
      width: 16,
      type: "number",
      defaultValue: 0,
    },
    {
      placeHolder: "Digite seu bairro",
      label: "Bairro",
      name: "district",
      width: 50,
    },
    {
      placeHolder: "Digite um complemento",
      label: "Complemento",
      name: "complment",
      width: 48,
    },
  ],
  [
    {
      placeHolder: "Selecione UF",
      label: "Estado (UF) *",
      name: "uf",
      width: 50,
    },
    {
      placeHolder: "Selecione Cidade",
      label: "Cidade *",
      name: "city",
      width: 48,
    },
  ],
];
