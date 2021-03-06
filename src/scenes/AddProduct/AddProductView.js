import React from 'react';
import s from './AddProduct.module.scss';
import Header from './../../components/Header/Header';
import {FormContainer, FormInput, Input, TextArea, Upload} from '../../components/Form';
import {required} from '../../Tools/Errors/handleErrors';
import Button from './../../components/Button/Button';

function AddProduct({
  initialValue,
  setInitialValue,
  handleAddProduct,
  disabledBtn,
  isLoading,
  errorMessage
}) {
  return (
    <React.Fragment>
      <Header theme="dark"/>
      <div className={s.container}>
        <div className={`${s.panelAddProduct} panel`}>
          <span className={`${s.namePanel} center`}>
            Add product
          </span>

          {errorMessage && (
            <span className="error">{errorMessage.message}</span>
          )}

          <FormContainer initialValue={initialValue} setInitialValue={setInitialValue}>

            <FormInput
              name="title"
              label="title*"
              validate={required}
              style={{
              height: "58px"
            }}
              placeholder="For example: Iron man suit">
              <Input/>
            </FormInput>

            <FormInput
              name="location"
              label="location*"
              validate={required}
              style={{
              height: "58px"
            }}
              placeholder="For example: Los Angeles, CA">
              <Input/>
            </FormInput>

            <FormInput
              name="description"
              label="description*"
              validate={required}
              style={{
              height: "183px"
            }}
              placeholder="For example: Iron man suit">
              <TextArea/>
            </FormInput>

            <FormInput
              name="photos"
              label="photos*"
              validate={required}
              style={{
              height: "124px"
            }}
              placeholder="For example: 120, 50">
              <Upload/>
            </FormInput>

            <FormInput
              name="price"
              label="price*"
              validate={required}
              style={{
              height: "58px"
            }}
              placeholder="For example: 120, 50">
              <Input/>
            </FormInput>

            <div className="center">
              <Button
                text="Add product"
                disabledBtn={disabledBtn}
                isLoading={isLoading}
                style={{
                height: '58px',
                marginTop: '32px',
                width: '50%'
              }}
                onClick={handleAddProduct}/>
            </div>

          </FormContainer>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddProduct;