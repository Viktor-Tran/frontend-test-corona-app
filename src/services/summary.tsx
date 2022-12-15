import { api } from "./api";

const Summary = {
    getDailyCase() {
        return api.call(process.env.REACT_APP_BASE_URL).get("/summary");
    },
    getDetailCountry(code: string) {
        return api.call(process.env.REACT_APP_REST_COUNTRIES).get(code);
    }
};
export default Summary;