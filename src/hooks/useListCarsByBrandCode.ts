import { listCarsByBrandCodeService } from "@/src/services/listCarsByBrandCodeService";
import { useQuery } from "./useQuery";

export const useListCarsByBrandCode = (brandCode: string) => {
  const { data, isLoading, error } = useQuery(
    async () => await listCarsByBrandCodeService(brandCode)
  );

  const cars =
    data?.modelos.map(({ codigo, nome }) => ({
      code: codigo.toString(),
      name: nome,
    })) ?? [];

  return { cars, isLoading, error };
};
