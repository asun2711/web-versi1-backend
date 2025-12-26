import { Spesialis } from '../spesialis/spesialis.entity';
export declare class Dokter {
    id: number;
    namadokter: string;
    gelardokter: string;
    jadwaldokter: string;
    sertifikatstrdokter: string;
    sertifikatsipdokter: string;
    gambardokter: string;
    spesialis?: Spesialis;
    spesialisId: number;
}
