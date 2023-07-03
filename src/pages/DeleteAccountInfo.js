import React, { useEffect, useState } from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
import PasswordUser from "../componentes/PasswordUser";
import profile from "../assets/profile.png"
import paypal from "../assets/paypal.png"
import { useAuth } from "../contexts/AuthContext";
import useAxios from "../hooks/useAxios";
import imgUrl from "../helpers/imgUrl";
import { useFeedBack } from "../contexts/FeedBackContext";


const DeleteAccountInfo = () => {

  const { user, setAuthInfo } = useAuth();

  const { setLoading } = useFeedBack();

  const [{ data, loading }, deleteAccount] = useAxios({ url: `/clients/account`, method: 'DELETE' }, { manual: true, useCache: false });

  useEffect(() => {
    setLoading({
      show: loading,
      message: "Delete Account"
    })
  }, [loading])

  useEffect(() => {
    if (data) {
      setAuthInfo({ isAuthenticated: false, user: null, token: null });
    }
  }, [data])

  return (
    <div className="container md:p-20 p-4 h-full md:w-md mb-6 max-w-full">

      <p className="md:text-4xl text-2xl text-center font-bold text-black mb-6 md:mb-12">
        Delete Account
      </p>

      <div className="mt-6">
        <CardWithTitle title="Delete account" className="md:w-32">
          <br />
          <p>Are you sure you want to delete your account?</p>
          <br />
          <p>
            This action is irreversible.
          </p>

          <div className="flex justify-center">
            <button className="bg-red-500 p-4 text-white rounded-xl" onClick={() => deleteAccount()}>
              Yes, I want to delete my account
            </button>
          </div>
        </CardWithTitle>
      </div>
    </div>
  );
};

export default DeleteAccountInfo;
