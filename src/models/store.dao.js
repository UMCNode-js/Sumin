// models/store.dao.js

import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { InsertMemberMission, getMemberId, getMissionId, getStoreId, } from "./store.sql.js";

// StoreMission 데이터 갖고오기
export const getStore = async (data) => {
    try{
        const conn = await pool.getConnection();
        
        const [mission] = await pool.query(getMissionId, data);

        console.log(mission);

        if(mission.length == 0){
            return -1;
        }

        conn.release();
        return mission;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

