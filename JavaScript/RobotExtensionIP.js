(function (ext) {

    ext._shutdown = function () {
        console.log('Shutting down...');
    };

    ext._getStatus = function () {
        return {status: 2, msg: 'Ready'};
    };

    ext.Setting_targetIP = function (ip) {
        console.log("Setting_targetIP");
        return ip;
    };

    port = ":8080";

    ext.Head_movement = function (ip, p1, p2, callback) {
        console.log("Head_movement");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?name=Head_movement' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Body_movement = function (ip, p1, p2, p3, callback) {
        console.log("Body_movement");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        console.log(p3);
        $.ajax({
            url: 'http://' + ip + port + '/?name=Body_movement' + '&p1=' + p1 + '&p2=' + p2 + '&p3=' + p3,
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Body_turn = function (ip, p1, p2, callback) {
        console.log("Body_turn");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?name=Body_turn' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Remote_control_body = function (ip, p1, callback){
        console.log("Remote_control_body");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?name=Remote_control_body' + '&p1=' + p1,
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Stop_moving = function (ip,callback){
        console.log("Stop_moving");
        console.log(ip);
        $.ajax({
            url: 'http://' + ip + port + '/?name=Stop_moving',
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Action = function (ip, p1,callback){
        console.log("Action");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?name=Action' + '&p1=' + p1,
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.Facial = function (ip, p1, callback) {
        console.log("Facial");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?name=Facial' + '&p1=' + p1,
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.TTS = function (ip, p1, callback) {
        console.log("Tts");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?name=TTS' + '&p1=' + p1,
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    ext.TTS_editor = function (ip, p1, callback) {
        console.log("TTS_editor");
        console.log(ip);
        console.log(p1);
        $.ajax({
            url: 'http://' + ip + port + '/?name=TTS_editor' + '&p1=' + p1,
            dataType: 'jsonp',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    var descriptor = {
        blocks: [
            ['r', '設定  %s', 'Setting_targetIP', "192.168.xx.xx"],
            ['', 'IP %s 頭部轉動  向 %m.head_direction   %m.head_degree  度', 'Head_movement', "192.168.0.1", "左", "45"],
            ['', 'IP %s %m.move_direction  移動  %m.move_far 公尺  速度  %m.move_speed', 'Body_movement', "192.168.0.1", "前進", "0.25", "一般"],
            ['', 'IP %s 身體轉動  向 %m.body_turn_direction  %m.body_turn_degree 度', 'Body_turn', "192.168.0.1", "左轉", "90"],
            ['', 'IP %s 遠端控制身體 %m.remote_control_body ', 'Remote_control_body', "192.168.0.1", "右轉"],
            ['', 'IP %s 停止移動', 'Stop_moving', "192.168.0.1"],
            ['', 'IP %s 行為 %m.action_type ', 'Action', "192.168.0.1", '打招呼'],
            ['', 'IP %s 表情 %m.facial_type', 'Facial', "192.168.0.1", '期待'],
            ['', 'IP %s 語音  %m.tts_type ', 'TTS', "192.168.0.1", 'Hi,你好'],
            ['', 'IP %s 語音  %s ', 'TTS_editor', "192.168.0.1", '請填入文字'],
        ],
        menus: {
            "head_direction": ["左", "右", "上", "下"],
            "head_degree": ["0", "15", "30", "45"],
            "move_direction": ["前進", "後退"],
            "move_far": ["0.25", "0.50", "0.75", "1.00", "1.25", "1.50", "1.75", "2.00"],
            "move_speed": ["慢", "一般", "快"],
            "body_turn_direction": ["左轉", "右轉"],
            "body_turn_degree": ["0", "15", "30", "45", "60", "75", "90", "105", "120", "135", "150", "165", "180"],
            "remote_control_body": ["停止", "前進", "左轉", "右轉"],
            "action_type": ["輕鬆(預設)", "聽指令/briefing(高)", "完成任務/滿足", "打招呼", "一般訊息-1", "待機(無聊)", "充電(滿足)", "聽指令/briefing(矮)", "連續任務衝突", "失望(使用者結束)",
                            "沮喪(使用者結束)", "待機(疲倦)", "快沒電", "充電(愉悅)", "充電(慵懶)", "跳舞-1大點", "聽懂", "音樂播放", "向左慢轉", "向左急轉", "搖頭(回答否定)", "跳舞-1小點", 
                            "害羞", "聽不懂", "跳舞-2", "連續搖頭", "搖頭晃腦", "跳舞-極快", "搖頭", "結束打招呼", "一般訊息-2", "向右慢轉", "向右急轉", "結束向左慢轉", "結束向右慢轉",
                            "結束向左急轉", "結束向右急轉", "解除連續任務衝突"],
            "facial_type": ["有興趣", "疑惑", "驕傲", "輕鬆愉快(預設)", "開心", "期待", "愣一下", "質疑", "不耐煩", "自信", "有活力", "得意", "無奈", "嚴肅", "煩惱", "裝平靜", "慵懶", "察覺", 
                            "倦怠", "害羞", "無辜", "有活力", "察覺", "預設"],
            "tts_type": ["Hi,你好", "看這裡", "WoW", "YA"],
        },
        url: 'http://zenbo.asus.com/' // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('ZenboScratchService', descriptor, ext);
})({});
