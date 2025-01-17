import { api } from "./api";

type Brand = {
  codigo: string;
  nome: string;
};

export const listBrandsService = async () => {
  try {
    const response = await api.get<Brand[]>("carros/marcas");
    return response.data;
  } catch (error) {
    console.error("Erro ao listar marcas:", error);
    throw new Error(
      "Não foi possível listar as marcas. Tente novamente mais tarde."
    );
  }
};
