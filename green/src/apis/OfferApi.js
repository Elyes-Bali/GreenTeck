import axios from "axios";


export const GetAllOff = async () => {
  
    try {
      const res = await axios.get("/api/produit/alloff");
      //  console.log(res.data.offers)
      return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export const ApplyOff = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/produit/apply/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };


  export const Getone = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const result = await axios.get(`/api/produit/getone/${id}`,config);
      //  console.log(res.data.offers)
      // console.log(result.data.ofer)
      return result.data.ofer;
      
    } catch (error) {
      console.log(error);
    }
  };

  export const Removeapply = async (id,apply) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.put(`/api/produit/deleteapply/${id}`, apply, config);
      //  console.log(res.data.offers)
      // return res.data.offers;
    } catch (error) {
      console.log(error);
    }
  };

  export  const hundelUpdate = async (id,offrr) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/produit/edite/${id}`,
        offrr,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };

  export const Getoff = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const result = await axios.get(`/api/produit/getoffers/${id}`,config);
      //  console.log(res.data.offers)
      // console.log(result.data.gtofers)
      return result.data.gtofers;
      
    } catch (error) {
      console.log(error);
    }
  };