package com.example.hiringagency.DAO;

import com.example.hiringagency.domain.entity.HealthcareJobApplication;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface HPMapper {

    void setHP(HealthcareJobApplication healthcareJobApplication);

    List<HealthcareJobApplication> selectAllHPs();
}
