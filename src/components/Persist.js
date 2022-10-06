import React, { useState } from 'react'

//データ保存する場所

// eslint-disable-next-line import/no-default-export
export default function Persist(ky, initVal) {

  const key = "hooks:" + ky
  const value = () => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initVal
    } catch (err) {
      // console.log(err)
      return initVal;
    }
  }
  const setValue = (val) => {
    try {
      setSavedValue(val)
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch(err) {
      // console.log(err)
    }
  }
  const [savedValue, setSavedValue] = useState(value)
  return [savedValue, setValue]
   
  
}