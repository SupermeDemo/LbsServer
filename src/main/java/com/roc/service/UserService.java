package com.roc.service;

import com.roc.exception.LbsServerException;
import com.roc.mapper.SysUserMapper;
import com.roc.pojo.SysUser;
import com.roc.utils.ResultEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private SysUserMapper mapper;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @Transactional(readOnly = true)
    public boolean login(String account,String password){
        String encodePassword = bCryptPasswordEncoder.encode(password);
        SysUser user = getUserByAccount(account);
        if(user!=null) {
            if (user.getPassword().equals(encodePassword)) {
                return true;
            }else{
                throw new LbsServerException(ResultEnum.PASSWORD_ERROR);
            }
        }else {
            throw new UsernameNotFoundException(ResultEnum.NO_EXIST_USER.getMsg());
        }
    }

    @Transactional(readOnly = true)
    public SysUser getUserByAccount(String account){
        return mapper.getByAccount(account);
    }

    public int addUser(SysUser user){
        if(user!=null){
            String encodePassword = bCryptPasswordEncoder.encode(user.getPassword());
            user.setPassword(encodePassword);
        }
        return mapper.insertPojo(user);
    }

    public int updateUser(SysUser user){
        return mapper.updatePojo(user);
    }

    @Transactional(readOnly = true)
    public SysUser getUser(int id){
        return mapper.getPojo(id);
    }

    public int deleteUser(int id){
        return mapper.deletePojo(id);
    }

}