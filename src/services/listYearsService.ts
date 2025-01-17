import { api } from "./api";

type Year = {
  codigo: string;
  nome: string;
};

type Params = {
  brandCode: string;
  modelCode: string;
};

export const listYearsService = async ({ brandCode, modelCode }: Params) => {
  try {
    const response = await api.get<Year[]>(
      `carros/marcas/${brandCode}/modelos/${modelCode}/anos`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao listar os anos:", error);
    throw new Error(
      "Não foi possível listar os anos. Tente novamente mais tarde."
    );
  }
};
