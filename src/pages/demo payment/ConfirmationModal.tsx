import {useEffect, useState} from "react";
import {API, Auth} from "aws-amplify";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";

const ConfirmationModal = (props: {  data : any}) => {
  console.log("helo::",props.data)
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [user, setUser] = useState({
    username: undefined
  })

  useEffect(()=> {
    Auth.currentUserInfo().then(r=> {
      setUser(r)
    })
  },[])

  console.log('user',user)

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    let submitData = {
      body: {
        transactionId: props.data.ipgTransactionId,
        merchantID:user.username,
        id: props.data.clientRequestId
      }
    }
    console.log('iuagviasuib',submitData)
    API.put(
        "PaymentsGateway",
        `/Payments/${props.data.ipgTransactionId}`,
        submitData
    ).then(r => {
      console.log(r)
      let cReq = r.authenticationResponse.params.cReq;
      let url = r.authenticationResponse.params.acsURL;
      postData(url, {
        creq: cReq
      });
    })
    setIsModalVisible(false);
  };

  const  postData = (path: string, params: { [x: string]: string; creq?: any; hasOwnProperty?: any; },method="post")=> {
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    const form = document.createElement("form");
    form.method = method;
    form.action = path;

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = params[key];

        form.appendChild(hiddenField);
      }
    }


    document.body.appendChild(form);
    form.submit();
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  return (
      <Dialog open={isModalVisible}
              fullWidth
              maxWidth={'sm'}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Confirm Payment"}
        </DialogTitle>
        <DialogContent>
              <Typography variant={"h5"}>
                Amount 1200 USD will be deducted from your payment Card
              </Typography>
          <Typography variant={"h6"} sx={{mt: 2}}>
            Do you want to confirm payment?
          </Typography>

        </DialogContent>
        <DialogActions>
          <Button  autoFocus onClick={handleCancel}>
            Disagree
          </Button>
          <Button  autoFocus onClick={handleOk}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default ConfirmationModal