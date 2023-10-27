export interface createPackageDto {
  client: string;
  quantity: number;
  destination: string;
  additional_information?: string;
  package_weigth: number;
  deadline_date: Date | null;
  coords:object;
}
