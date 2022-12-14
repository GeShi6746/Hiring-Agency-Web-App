package com.example.hiringagency.service;

import com.example.hiringagency.domain.entity.*;
import com.example.hiringagency.domain.model.BillingAccountInfo;
import com.example.hiringagency.domain.model.HPAccountInfo;
import com.example.hiringagency.domain.model.HPDetails;
import com.example.hiringagency.domain.model.Info;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface StaffService {

    void setAd(JobAdvertisements jobAdvertisements);

    List<JobAdvertisements> viewAllAds();

    void deleteAd(@Param("jobAdvertisementId") Long AdvertisementId);

    void addHPAccount(String firstName, String lastName, String username, String password, String postalAddress, Long phoneNumber, String email, Double hourlyRate);

    // hire HP - 1
    Info selectHPInfoById(@Param("healthcareJobApplicationId") Long healthcareJobApplicationId);

    // hire HP - 2
    Long maxId();

    // hire HP - 3
    void updateHPId(@Param("userId") Long userId, @Param("healthcareJobApplicationId") Long healthcareJobApplicationId);

    List<HPDetails> allHP();

    void addCTAccount(String firstName, String lastName, String username, String password, String postalAddress, Long phoneNumber, String email);

    Info selectCTInfoById(@Param("careTakerRegistrationId") Long careTakerRegistrationId);

    void updateCTId(@Param("userId") Long userId, @Param("careTakerRegistration") Long careTakerRegistration);

    List<Users> allCT();

    List<CareRequests> requestsList();

    List<ServiceEntries> selectServiceEntries(@Param("careRequestId") Long careRequestId);

    List<HealthcareJobApplication> assignHPList(@Param("careRequestId") Long careRequestId, @Param("serviceEntryId") Long serviceEntryId);

    boolean selectBillingByRequest(@Param("careRequestId") Long careRequestId);

    void assignHP(@Param("userId") Long userId, @Param("serviceEntryId") Long serviceEntryId);

    List<ServiceEntries> selectEntriesByHp(@Param("userId") Long userId);

    void deAssignHP(@Param("serviceEntryId") Long serviceEntryId);

    void addBilling(Billing billing);

    List<BillingAccountInfo> selectBilling();

    boolean pay(@Param("amount") double amount, @Param("billingId") Long billingId);

    Boolean softDeleteCT(@Param("careTakerId") Long careTakerId);

    void withdraw(@Param("careRequestId") long careRequestId);

    List<CareRequests> selectRequestByCt(@Param("careTakerId") Long careTakerId);

    void updateHour(@RequestBody ServiceEntries serviceEntries);

    Boolean softDeleteHP(@Param("hpId") Long hpId);

    boolean payHP(@Param("amount") double amount, @Param("hpId") Long hpId);

    List<HPAccountInfo> selectHPAccount();

    List<CareRequests> selectWithdrawRequests();

    List<CareRequests> selectTerminateRequests();
}