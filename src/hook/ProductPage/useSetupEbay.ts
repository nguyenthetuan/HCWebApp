import request from "@/services/Request";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useContextDialog } from "@/context";

export const useSetupEbay = () => {
  const [fulfillmentPolicy, setFullFillmentPolicy] = useState<any[]>([]);
  const [returnPolicy, setReturnPolicy] = useState<any[]>([]);
  const [paymentPolicy, setPalymentPolicy] = useState<any[]>([]);
  const getfulfillmentPolicy = async () => {
    try {
      const response = await request.get(`/api/ebay/fulfillment_policy`);
      setFullFillmentPolicy(response.fulfillmentPolicies);
    } catch (error) {}
  };

  const getReturnPolicies = async () => {
    try {
      const response = await request.get(`/api/ebay/return_policy`);
      setReturnPolicy(response.returnPolicies);
    } catch (error) {}
  };

  const getPaymentPolicy = async () => {
    try {
      const response = await request.get(`/api/ebay/payment_policy`);
      setPalymentPolicy(response.paymentPolicies);
    } catch (error) {}
  };

  return {
    fulfillmentPolicy,
    returnPolicy,
    paymentPolicy,
    getfulfillmentPolicy,
    getReturnPolicies,
    getPaymentPolicy,
  };
};
