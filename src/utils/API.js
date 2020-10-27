import axios from "axios";


export default {
    fetchUsers: function () {
        return axios.get(
            "https://randomuser.me/api/?results=50&nat=us&inc=id,name,email,gender,phone,picture"
        );
    },
};
