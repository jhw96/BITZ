package com.osds.bitz.model.network.request.account;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BusinessRequest {

    private String email;
    private String password;
    private String birth;
    private String name;
    private String phone;
    private String bank;
    private String account;
    private MultipartFile businessRegistration;

}
