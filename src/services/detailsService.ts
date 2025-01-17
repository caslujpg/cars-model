import { api } from "./api";

type Details = {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
};

type Params = {
  brandCode: string;
  modelCode: string;
  yearCode: string;
};

export const detailsService = async ({
  brandCode,
  modelCode,
  yearCode,
}: Params) => {
  try {
    const response = await api.get<Details>(
      `carros/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao listar os detalhes:", error);
    throw new Error(
      "Não foi possível listar os detalhes. Tente novamente mais tarde."
    );
  }
};
