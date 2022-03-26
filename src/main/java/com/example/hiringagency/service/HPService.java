package com.example.hiringagency.service;

import com.example.hiringagency.domain.entity.HealthcareJobApplication;
import com.example.hiringagency.domain.entity.ServiceEntries;
import com.example.hiringagency.domain.model.ScheduleDetails;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.Timestamp;
import java.util.List;

public interface HPService {
    boolean setHP(HealthcareJobApplication healthcareJobApplication);

    List<HealthcareJobApplication> selectAllHPs();

    List<HealthcareJobApplication> selectHPByJobId(@Param("jobAdvertisementId")Long jobAdvertisementId);

    List<ScheduleDetails> selectEntries (@Param("userId")Long userId);

    void updateHour(@RequestBody ServiceEntries serviceEntries);
}
