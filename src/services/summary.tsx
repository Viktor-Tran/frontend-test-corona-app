import { api } from "./api";

const Summary = {
    getDailyCase() {
        return api.call().get("/summary");
    }
};
export default Summary;