package com.newxton.companywebsite.service;

import com.newxton.companywebsite.entity.NxtContent;
import java.util.List;

/**
 * (NxtContent)表服务接口
 *
 * @author makejava
 * @since 2020-07-23 09:24:15
 */
public interface NxtContentService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    NxtContent queryById(Long id);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    List<NxtContent> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param nxtContent 实例对象
     * @return 实例对象
     */
    NxtContent insert(NxtContent nxtContent);

    /**
     * 修改数据
     *
     * @param nxtContent 实例对象
     * @return 实例对象
     */
    NxtContent update(NxtContent nxtContent);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Long id);

}