import LoadingAnimation from "../../components/LoadingAnimation";
import ConfirmationModal from "../demo payment/ConfirmationModal";
import {Box, Button, Container, Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import Img from "../../assets/images/channels4_profile.jpg";
import {useEffect, useState} from "react";
import {API, Auth} from "aws-amplify";
import {useForm} from "react-hook-form";

const DemoSchedule = () => {

    const [loading, setLoading] = useState(false)
    const [price, setPrice] = useState(1200)
    const [user, setUser] = useState({
        username : null
    })
    const [conformation, setConformation] = useState(false)
    const [confirmData, setConformData] = useState({})
    const [transactionID, setTransactionID] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    useEffect(()=> {
        if (transactionID){
            setConformation(true)
        }

    }, [transactionID])

    useEffect(()=> {
        Auth.currentUserInfo().then(r => setUser(r))
    },[])

    const {register, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            number: "4005520000000129",
            month: "10",
            year: "22",
            securityCode: "002",
        }
    });


    const onSubmit = async (data: any) => {
        let submitData = {
            body: {
                ...data,
                amount: price,
                currency: "USD",
                year: 22,
                merchantID: user.username
            }

        }
        console.log(submitData)
        console.log(submitData)
        setLoading(true)
        await API.post(
            "PaymentsGateway",
            `/Payments/`,
            submitData
        ).then(async (res: { ipgTransactionId: any; }) => {
            setLoading(false)
            await setConformData({
                ...res
            })
            await setTransactionID(res.ipgTransactionId)
            console.log('awsdata', confirmData)

            // submitData = {
            //     body: {
            //         transactionId: transactionID,
            //         merchantID:user.username
            //     }
            // }
            // await API.patch(
            //     "PaymentsGateway",
            //     `/Payments?${res.ipgTransactionId}`,
            // ).then(r=>console.log("patch::", r))
        }).catch(errors => {
            setLoading(false)
            showModal()
            console.log('1:::', errors);
            // console.log(error.response.data.error.details);
            // console.log('2:::', error.response.status);
            // setError(`custom`, {
            //     type: 'custom',
            //     message: errors
            // }, {shouldFocus: true})
        });
    }

    function handleChange(e: any) {
        console.log(e.target.value)
        setPrice(1200 * e.target.value)
    }

    return (
      <Paper elevation={3} sx={{p:2}}>
          {loading && (
              <LoadingAnimation/>
          )}
          {
              conformation && (<ConfirmationModal data={confirmData}/>)
          }
          <Container>
              <Typography variant={'h4'} textAlign={"center"}>
                  Payment
              </Typography>
              <Divider sx={{m:2}}/>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <img src={Img} width={'100%'} alt={""}/>
                  </Grid>
                  <Grid item xs={12} sm={6} >
                      <Box sx={{ml:2}}>
                          <Box>
                              <Typography>
                                  Name : Windows 11 Pro / AMD Ryzen™ 9 6900HX Mobile Processor (8-core/16-thread, 20MB
                                  cache, up to 4.9 GHz max boost)
                              </Typography>
                          </Box>
                          <Paper sx={{p:2}}>
                              <Typography >
                                  Credit Card Info
                              </Typography>
                              <Grid container spacing={2} sx={{mt:.1}}>
                                  <Grid item xs={12} sm={6}>
                                      <TextField label={"Quantity"} defaultValue={1} onChange={e=>handleChange(e)} type={"number"}/>
                                  </Grid>
                                  <Grid item xs={12}sm={6}>
                                      <Box sx={{mt:1}}>Total : {price} USD</Box>
                                  </Grid>
                              </Grid>
                              <Box sx={{mt:2}}>
                                  <form onSubmit={handleSubmit(onSubmit)}>

                                      <TextField fullWidth {...register("number", {required: true})}
                                                 label={"Card Number"}/>
                                      {errors.number && <span>This field is required</span>}
                                      <Grid container sx={{mt: 1}} spacing={2}>
                                          <Grid item sm={6}>
                                              <TextField {...register("month", {required: true})} fullWidth
                                                         label={"Expire Month"}/>
                                              {errors.month && <span>This field is required</span>}
                                          </Grid>
                                          <Grid item sm={6}>
                                              <TextField fullWidth {...register("year", {required: true})}
                                                         label={"Expire Year"}/>
                                              {errors.year && <span>This field is required</span>}
                                          </Grid>
                                      </Grid>
                                      <TextField fullWidth {...register("securityCode", {required: true})} sx={{mt: 2}}
                                                 label={"Security Code"}/>
                                      {errors.securityCode && <span>This field is required</span>}
                                      <Button fullWidth type={'submit'} variant={'outlined'} sx={{mt: 2}}>
                                          Submit
                                      </Button>
                                  </form>
                              </Box>
                          </Paper>

                      </Box>


                  </Grid>
              </Grid>
          </Container>
      </Paper>
  )
}
export default DemoSchedule