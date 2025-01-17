import { listYearsService } from "@/src/services/listYearsService";
import { useQuery } from "./useQuery";

type Props = {
  brandCode: string;
  modelCode: string;
};

export const useListYears = ({ brandCode, modelCode }: Props) => {
  const { data, isLoading, error } = useQuery(
    async () => await listYearsService({ brandCode, modelCode })
  );

  const years =
    data?.map(({ codigo, nome }) => ({
      code: codigo.toString(),
      name: nome,
    })) ?? [];

  return { years, isLoading, error };
};
