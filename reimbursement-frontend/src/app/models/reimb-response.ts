export class ReimbResponse {
    constructor(
        public reimbID: string,
        public amount: number,
        public submitted: string,
        public resolved: string, 
        public description: string,
        public authorID: string,
        public resolverID: string, 
        public statusID: number,
        public typeID: number
    ) {}
}
