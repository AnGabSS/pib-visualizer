import { PibUnitedInterface } from "./PibUnitedInterface";
import { PIBValuesInterface } from "./PIBValuesInterface";

export interface PIBPageProps {
  pibTotal: PIBValuesInterface[];
  pibPerCapita: PIBValuesInterface[];
  pibUnited: PibUnitedInterface[];
}
