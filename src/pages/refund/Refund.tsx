import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField, Typography
} from "@mui/material";
import {useState} from "react";

import {API} from "aws-amplify";

const Refund = (props: { data: any }) => {
    const [open, setOpen] = useState(true);
    console.log(props.data)
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        let submitData = {
            "body": {
                "total": parseInt(props.data.taTotal),
                "currency": props.data.taCurrency
            }
        }
        console.log(submitData)
        await API.post(
            "PaymentsGateway",
            `/Order/${props.data.orderId}`,
            submitData
        )
        setOpen(false);
    }

    return (
        <Dialog open={open}
                fullWidth
                maxWidth={'xs'}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {"Do you want to refund this payment?"}
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}  sx={{mt:2}}>
                    <Grid item sm={6}>
                        <TextField
                            id="outlined-basic"
                            label="Enter Amount"
                            variant="outlined"
                            defaultValue={parseInt(props.data.taTotal)}
                        />
                    </Grid>
                    <Grid item sm={6} sx={{mt:1}}>
                        <Typography>
                            {props.data.taCurrency}
                        </Typography>
                    </Grid>


                </Grid>


            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button  autoFocus onClick={handleSubmit}>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Refund