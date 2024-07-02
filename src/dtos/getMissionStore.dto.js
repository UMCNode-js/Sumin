
export const getMissionStoreDTO = (mission, mission_id) => {
    const missions = [];
    for(let i = 0; i < mission[0].length; i++){
        mission.push(mission[0][i].mission_id);
    }


    return {"missionId": mission[0].mission_id, "status": mission[0].status};
}