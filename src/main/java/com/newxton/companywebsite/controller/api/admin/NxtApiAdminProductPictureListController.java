package com.newxton.companywebsite.controller.api.admin;

import com.newxton.companywebsite.entity.NxtProduct;
import com.newxton.companywebsite.entity.NxtProductPicture;
import com.newxton.companywebsite.entity.NxtUploadfile;
import com.newxton.companywebsite.service.NxtProductPictureService;
import com.newxton.companywebsite.service.NxtProductService;
import com.newxton.companywebsite.service.NxtUploadfileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author soyojo.earth@gmail.com
 * @time 2020/7/24
 * @address Shenzhen, China
 * @github https://github.com/soyojoearth/newxton_company_website
 */
@RestController
public class NxtApiAdminProductPictureListController {

    @Value("${newxton.config.qiniuDomain}")
    private String qiniuDomain;

    @Resource
    private NxtProductPictureService nxtProductPictureService;

    @Resource
    private NxtUploadfileService nxtUploadfileService;

    @RequestMapping(value = "/api/admin/product/picture_list", method = RequestMethod.POST)
    public Map<String, Object> index(
            @RequestParam(value = "product_id", required = false) Long productId
    ) {

        Map<String, Object> result = new HashMap<>();
        result.put("status", 0);
        result.put("message", "");

        if (productId == null) {
            result.put("status", 52);
            result.put("message", "参数错误");
            return result;
        }

        List<Map<String,Object>> listResult = new ArrayList<>();

        /*查询产品图片*/
        NxtProductPicture nxtProductPictureCondition = new NxtProductPicture();
        nxtProductPictureCondition.setProductId(productId);
        List<NxtProductPicture> picList = nxtProductPictureService.queryAll(nxtProductPictureCondition);
        for (NxtProductPicture productPicture :
                picList) {
            NxtUploadfile nxtUploadfile = nxtUploadfileService.queryById(productPicture.getUploadfileId());
            if (nxtUploadfile != null) {
                Map<String,Object> item = new HashMap<>();
                item.put("id",productPicture.getUploadfileId());
                item.put("url", this.qiniuDomain + nxtUploadfile.getUrlpath());
                listResult.add(item);
            }
        }


        result.put("list",listResult);

        return result;

    }

}
