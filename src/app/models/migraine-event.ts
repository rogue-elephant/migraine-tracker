import { MigrainePainAreasEnum } from './migraine-areas';
import { MigraineSymptomsEnum } from './migraine-symptoms';

export interface IMigraineEvent {
    severity: number,
    date: Date,
    foodNotes?: string,
    drinkNotes?: string,
    excerciseNotes?: string,
    generalNotes?: string,
    areas: MigrainePainAreasEnum[],
    symptoms: MigraineSymptomsEnum[]
}