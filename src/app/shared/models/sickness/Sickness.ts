export class Sickness {
  constructor(
    public sicknessId: number,
    public description: string,
    public dateSickness: string,
    public whereOccurr: string,
    public totalDaysOutOfWork: number,
    public totalDaysRestrictedTransferredWork: number,
    public saCategoryId: number,
    public saTypeId: number,
    public employeeId: number
  ) {}
}
