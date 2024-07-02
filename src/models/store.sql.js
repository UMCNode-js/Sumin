// models/store.sql.js

export const InsertMemberMission = //member_mission 테이블에 추가
"INSERT INTO member_mission (member_id, mission_id, status) VALUES (?, ?, 'doing');";

export const getMemberId =
 "SELECT * FROM user WHERE user_id = ?";

export const getMissionId =
"SELECT * FROM mission WHERE mission_id = ?";

export const getStoreId =
"SELECT * FROM store WHERE store_id;";