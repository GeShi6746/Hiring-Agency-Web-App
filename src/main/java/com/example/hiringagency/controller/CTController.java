package com.example.hiringagency.controller;

import com.example.hiringagency.domain.entity.Billing;
import com.example.hiringagency.domain.entity.CareRequests;
import com.example.hiringagency.domain.entity.CareTakerRegistration;
import com.example.hiringagency.domain.entity.ServiceEntries;
import com.example.hiringagency.service.CTService;
import com.example.hiringagency.service.Utilities;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CTController {

    @Autowired
    private CTService ctService;

    @Autowired
    private Utilities utilities;

    // register as a care taker
    @PostMapping("/CTRegister")
    public Map<String,String> CTRegister(@RequestBody CareTakerRegistration careTakerRegistration){
        Map<String, String> ret = new HashMap<>();
        boolean isCoNum = utilities.isCorrectNumFormat(Long.toString(careTakerRegistration.getPhoneNumber()));
        if(!isCoNum){
            ret.put("code", "400");
            ret.put("msg", "Please enter phone number in the correct format.");
            return ret;
        }
        boolean isCoEmail = utilities.isCorrectEmaFormat(careTakerRegistration.getEmail());
        if(!isCoEmail){
            ret.put("code", "401");
            ret.put("msg", "Please enter email in the correct format.");
            return ret;
        }
        ctService.CTRegister(careTakerRegistration);
        ret.put("code", "200");
        ret.put("msg", "Register success.");
        return ret;
    }

    // care taker register list
    @GetMapping("/ctList")
    public List<CareTakerRegistration> getCTList(){
        return ctService.selectAllCTs();
    }

    // care taker request for a service
    @PostMapping("/addRequest")
    public Map<String,String> addRequest(@RequestBody CareRequests careRequests){
        Map<String, String> ret = new HashMap<>();
        boolean canAdd = ctService.addRequest(careRequests);
        if (canAdd){
            ret.put("code", "200");
            ret.put("msg", "Add request success.");
            return ret;
        } else {
            ret.put("code", "201");
            ret.put("msg", "Add request failure.");
            return ret;
        }
    }

    // care taker's request list
    @GetMapping("/requestList")
    public List<CareRequests> getRequestList(Long careTakerId){
        return ctService.selectRequests(careTakerId);
    }

    @PostMapping("/addEntries")
    public Map<String,String> addEntries(Long careRequestId) {
        Map<String, String> ret = new HashMap<>();
        ctService.addEntries(careRequestId);
        ret.put("code", "200");
        ret.put("msg", "Add Entries success.");
        return ret;
    }

    @GetMapping("/entriesList")
    public List<ServiceEntries> getEntriesList(Long careRequestId){
        return ctService.selectServiceEntries(careRequestId);
    }

    @GetMapping("/billingList")
    public List<Billing> getBillingList(Long careTakerId){
        return ctService.selectBilling(careTakerId);
    }

    @GetMapping("/ctPayment")
    public Map<String, String> pay(@Param("amount") double amount, @Param("billingId") Long billingId){
        Map<String, String> ret = new HashMap<>();
        ctService.pay(amount, billingId);
        ret.put("code", "200");
        ret.put("msg", "Pay billing account success.");
        return ret;
    }
}

