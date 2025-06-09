import request from "@/services/Request";
import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useContextDialog } from "@/context";
import { useDispatch } from "react-redux";
import { setConfigSlice } from "@/feature/useProductManageSlice";
export const useSetupEbay = () => {
  const [fulfillmentPolicy, setFullFillmentPolicy] = useState<any[]>([]);
  const [returnPolicy, setReturnPolicy] = useState<any[]>([]);
  const [paymentPolicy, setPalymentPolicy] = useState<any[]>([]);
  const [invertoryLocation, setInventoryLocation] = useState<any[]>([]);
  const [config, setConfig] = useState(null);
  const dispatch = useDispatch<any>();
  const refModalSetupEbay = useRef(null);

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

  const getInventoryLocations = async () => {
    try {
      const response = await request.get(`/api/ebay/inventory_location`);
      setInventoryLocation(response.locations);
    } catch (error) {}
  };

  const getConfig = async (changeFormData) => {
    try {
      const response = await request.get(`/api/config`);
      setConfig(response);
      setConfigSlice(response);
      changeFormData(response);
    } catch (error) {}
  };

  const putConfig = async (formData) => {
    try {
      const response = await request.put(`/api/config`, formData);
      refModalSetupEbay?.current?.closeModal();
      toast.success("Cài đặt thành công");
    } catch (error) {}
  };

  return {
    fulfillmentPolicy,
    returnPolicy,
    paymentPolicy,
    invertoryLocation,
    config,
    refModalSetupEbay,
    getfulfillmentPolicy,
    getReturnPolicies,
    getPaymentPolicy,
    getInventoryLocations,
    getConfig,
    putConfig,
  };
};
