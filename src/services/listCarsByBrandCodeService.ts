import { api } from "./api";

type Model = {
  codigo: number;
  nome: string;
};

type Year = {
  codigo: string;
  nome: string;
};

type Cars = {
  modelos: Model[];
  anos: Year[];
};

export const listCarsByBrandCodeService = async (code: string) => {
  try {
    const response = await api.get<Cars>(`carros/marcas/${code}/modelos`);
    return response.data;
  } catch (error) {
    console.error("Erro ao listar os carros:", error);
    throw new Error(
      "Não foi possível listar os carros. Tente novamente mais tarde."
    );
  }
};
