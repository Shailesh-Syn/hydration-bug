"use client";

import React from "react";
import "./globals.css";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  Checkbox,
  Button,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const label = { htmlFor: "checkbox", children: "Checkbox Label" };
const customer = () => {
  return (
    <>
      <div>
        <div className="containerbhau">
          {/* this is a one container */}
          <div className="titleRow">Contact Information</div>
          <div className="Row2">
            <div className="mainContainer">
              <div className="TextFieldContainer">
                <div className="TextField_Primary pr-4">
                  <p>Primary Phone:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
                <div className="TextField_Secondary">
                  <p>Secondary Phone:</p>
                  <TextField id="outlined-basic" />
                </div>
              </div>

              <div className="TextFieldContainer">
                <div className="TextField_Mobile pr-4">
                  <p>Mobile:</p>
                  <TextField id="outlined-basic" />
                </div>
                <div className="TextField_Fax">
                  <p>Fax:</p>
                  <TextField id="outlined-basic" />
                </div>
              </div>

              <div className="TextFeildcontainer">
                <div className="TextField_Primary pr-4">
                  <p>Email Address:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>
              <div className="TextFeildcontainer">
                <div className="TextField_Primary pr-4">
                  <p>Accounting Email:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>
              <div className="TextFeildcontainer">
                <div className="TextField_Primary pr-4">
                  <p>Website:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>
            </div>
            {/* this is a second container */}

            <div className="mainContainer11">
              <div className="TextFeildcontainer">
                <div className="TextField_Primary pr-5">
                  <p>Address:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>

              <div className="TextFeildcontainer">
                <div className="TextField_Primary pr-5">
                  <p>Suite/Unit#:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>

              <div className="TextFieldContainer">
                <div className="TextField_city pr-5">
                  <p>City:</p>
                  <TextField id="outlined-basic" />
                </div>
                <div className="TextField_state pr-5">
                  <p>State:</p>
                  <TextField id="outlined-basic" />
                </div>
                <div className="TextField-zip pr-5">
                  <p>zip:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>

              <div className="TextFeildcontainer">
                <div className="TextField_country pr-5">
                  <p>county:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />

                  <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    ></InputLabel>
                    <p>country:</p>
                    <Select>
                      <option value={10}>UnitedState</option>
                      <option value={20}>India</option>
                      <option value={30}>Japan</option>
                    </Select>
                  </FormControl>
                </div>
              </div>

              {/* third container */}
            </div>
            <div className="mainContainer12">
              <div className="TextFeildcontainer">
                <div className="TextField_Primary pr-6">
                  <p>
                    Address: <Checkbox {...label} defaultChecked />{" "}
                  </p>

                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>

              <div className="TextFeildcontainer">
                <div className="TextField_Primary pr-6">
                  <p>Suite/Unit#:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>

              <div className="TextFieldContainer">
                <div className="TextField_city pr-6">
                  <p>City:</p>
                  <TextField id="outlined-basic" />
                </div>
                <div className="TextField_state pr-6">
                  <p>State:</p>
                  <TextField id="outlined-basic" />
                </div>
                <div className="TextField-zip pr-6">
                  <p>zip:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />
                </div>
              </div>

              <div className="TextFeildcontainer">
                <div className="TextField_country pr-6">
                  <p>county:</p>
                  <TextField
                    id="outlined-basic"
                    className="input-field-height"
                  />

                  <FormControl sx={{ m: 1, width: 200 }}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <p>country:</p>
                    <Select>
                      <option value={10}>Prizam-Spokem</option>
                      <option value={20}>India</option>
                      <option value={30}>Prizam-Spokem</option>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* this is a 4th container */}
        <div className="container15-16">
          <div className="maincontainer15">
            <p> parent Location:</p>

            <div className="locationinfo pr-7">
              <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="demo-simple-select-label">
                  Prizam-Spokem
                </InputLabel>

                <Select>
                  <option value={10}>Prizam-Spokem</option>
                  <option value={20}>India</option>
                  <option value={30}>Prizam-Spokem</option>
                </Select>
              </FormControl>
            </div>
            <div className="multilocationselector">
              <p>
                {" "}
                <Checkbox {...label} defaultChecked /> Multi location customer
                <Checkbox {...label} defaultChecked /> Generic Customer
              </p>
            </div>

            <div className="routelocation">
              <p>Route Location</p>

              {/* <FormControl>
          <NativeSelect>
            <option value={10}>--Select--</option>
            <option value={20}>India</option>
            <option value={30}>Prizam-Spokem</option>
          </NativeSelect>
        </FormControl> */}

              <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="demo-simple-select-label">
                  --select--
                </InputLabel>
                <Select>
                  <option value={10}>--Select--</option>
                  <option value={20}>India</option>
                  <option value={30}>Prizam-Spokem</option>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* this is a 5th conatainer */}
          <div className="mainContainer16">
            <div className="TextField_Primary pr-7">
              <p>
                {" "}
                <Checkbox {...label} defaultChecked /> Po Required: A po i
                srequired process to any sales order for this computer.
              </p>

              <p>
                {" "}
                <Checkbox {...label} defaultChecked /> Po Required: A po i
                srequired process to any sales order for this computer.
              </p>
              <p>
                {" "}
                the prefared way of sending document to this customer is{" "}
                <FormControl sx={{ m: 1, width: 100 }}>
                  <InputLabel id="demo-simple-select-label">
                    --select--
                  </InputLabel>
                  <Select>
                    <option value={10}>--Select--</option>
                    <option value={20}>India</option>
                    <option value={30}>Prizam-Spokem</option>
                  </Select>
                </FormControl>
              </p>
              <p>
                {" "}
                # of days of grace period after which the invoices are
                considered for past due lock:{" "}
                <Button variant="outlined"></Button>
              </p>
              <p>
                {" "}
                # Days Of Hold <Button variant="outlined"></Button>
              </p>
              <p> Customers Since: </p>
              <TextField sx={{ m: 1, width: 120 }} defaultValue="06/07/2023" />
              {/* <svg data-testid="CalendarMonth"></svg> */}

              <p> Ein Number</p>
              <TextField sx={{ m: 1, width: 120 }} defaultValue="" />
            </div>
          </div>
        </div>

        {/* div15-16 container end */}

        <div className="maincontainer17">
          <div>
            <div className="Sales">
              <p> Marble Sales Container:</p>
              <FormControl sx={{ m: 1, width: 100 }}>
                <Select className="sai">
                  <option value={10}>--Select--</option>
                  <option value={20}>India</option>
                  <option value={30}>Prizam-Spokem</option>
                </Select>
              </FormControl>
              <p> Contact Sales Person:</p>
              <FormControl sx={{ m: 1, width: 100 }}>
                <Select>
                  <option value={10}>--Select--</option>
                  <option value={20}>India</option>
                  <option value={30}>Prizam-Spokem</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <div className="Sales">
              <p> Envision Sales Person:</p>
              <FormControl sx={{ m: 1, width: 100 }}>
                <Select>
                  <option value={10}>--Select--</option>
                  <option value={20}>India</option>
                  <option value={30}>Prizam-Spokem</option>
                </Select>
              </FormControl>
              <p> Project Manager:</p>
              <FormControl sx={{ m: 1, width: 100 }}>
                <Select>
                  <option value={10}>--Select--</option>
                  <option value={20}>India</option>
                  <option value={30}>Prizam-Spokem</option>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="Sales">
            <p> Pricee Level:</p>
            <FormControl sx={{ m: 1, width: 100 }}>
              <Select>
                <option value={10}>--Select--</option>
                <option value={20}>India</option>
                <option value={30}>Prizam-Spokem</option>
              </Select>
            </FormControl>
          </div>
          <div className="Sales">
            <p> Payment Terms:</p>
            <FormControl sx={{ m: 1, width: 100 }}>
              <Select>
                <option value={10}>--Select--</option>
                <option value={20}>India</option>
                <option value={30}>Prizam-Spokem</option>
              </Select>
            </FormControl>
            <p> Sales Tax:</p>
            <FormControl sx={{ m: 1, width: 100 }}>
              <Select>
                <option value={10}>--Select--</option>
                <option value={20}>India</option>
                <option value={30}>Prizam-Spokem</option>
              </Select>
            </FormControl>
          </div>
          <Checkbox {...label} defaultChecked />
          Tax Except{" "}
          <FormControl sx={{ m: 1, width: 100 }}>
            <Button sx={{ display: "block", mt: 2 }}>The Except Reason:</Button>
            <Select>
              <option value={10}>--Select--</option>
              <option value={20}>India</option>
              <option value={30}>Prizam-Spokem</option>
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default customer;
