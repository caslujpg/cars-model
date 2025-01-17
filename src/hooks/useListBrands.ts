import { listBrandsService } from "@/src/services/listBrandsService";
import { useQuery } from "./useQuery";

export const useListBrands = () => {
  const { data, isLoading, error } = useQuery(listBrandsService);

  const brands =
    data?.map(({ codigo, nome }) => ({ code: codigo, name: nome })) ?? [];

  return { brands, isLoading, error };
};
