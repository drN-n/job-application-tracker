package com.drn.job_application_tracker_api.repository;

import com.drn.job_application_tracker_api.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

}