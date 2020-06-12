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
      placeholder: "Digite o nome da entidade",
      label: "Nome da entidade *",
      name: "name",
      width: 100,
    },
    {
      placeholder: "Digite seu email",
      label: "Email *",
      name: "email",
      width: 50,
    },
    {
      placeholder: "Digite seu whatsapp",
      label: "Whatsapp *",
      name: "whatsapp",
      width: 48,
    },
  ],
  [
    {
      placeholder: "Digite o nome da rua",
      label: "Rua",
      name: "road",
      width: 80,
    },
    {
      placeholder: "",
      label: "Número",
      name: "number",
      width: 16,
      type: "number",
      defaultValue: 0,
    },
    {
      placeholder: "Digite seu bairro",
      label: "Bairro",
      name: "district",
      width: 50,
    },
    {
      placeholder: "Digite um complemento",
      label: "Complemento",
      name: "complment",
      width: 48,
    },
  ],
  [
    {
      placeholder: "Selecione UF",
      label: "Estado (UF) *",
      name: "uf",
      width: 50,
    },
    {
      placeholder: "Selecione Cidade",
      label: "Cidade *",
      name: "city",
      width: 48,
    },
  ],
];
