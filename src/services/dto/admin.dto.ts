export interface createPackageDto {
  client: string;
  quantity: number;
  destination: string;
  package_weigth: number;
  deadline_date: Date | null;
}
