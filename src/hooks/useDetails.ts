import { detailsService } from "@/src/services/detailsService";
import { useQuery } from "./useQuery";

type Props = {
  brandCode: string;
  modelCode: string;
  yearCode: string;
};

const mapVehicleType = (type: number): string => {
  const vehicleTypes: Record<number, string> = {
    1: "Carro",
    2: "Moto",
    3: "Caminhão",
  };
  return vehicleTypes[type] || "desconhecido";
};

export const useDetails = ({ brandCode, modelCode, yearCode }: Props) => {
  const { data, isLoading, error } = useQuery(async () => {
    const detailsResponse = await detailsService({
      brandCode,
      modelCode,
      yearCode,
    });

    if (!detailsResponse) return null;

    return {
      vehicleType: mapVehicleType(detailsResponse.TipoVeiculo),
      value: detailsResponse.Valor,
      brand: detailsResponse.Marca,
      model: detailsResponse.Modelo,
      yearModel: detailsResponse.AnoModelo,
      fuelType: detailsResponse.Combustivel,
      fipeCode: detailsResponse.CodigoFipe,
      monthRef: detailsResponse.MesReferencia,
      shortFuelType: detailsResponse.SiglaCombustivel,
    };
  });

  return { details: data, isLoading, error };
};
