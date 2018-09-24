!(function(e) {
  "use strict";
  var r = window.document,
    a = r.body,
    t = (function(e) {
      var t = ("; " + r.cookie).split("; " + e + "=");
      if (2 === t.length)
        return t
          .pop()
          .split(";")
          .shift();
    })("settings"),
    n = t && "{" === t[0] ? JSON.parse(t) : {},
    i = a.querySelectorAll(".font-size-change"),
    s = a.querySelectorAll(".font-change"),
    o = a.querySelectorAll(".colour-change"),
    c = a.querySelectorAll(".p-borders-change");
  function l() {
    var e = parseFloat(this.getAttribute("data-amount"), 10),
      t = getComputedStyle(a)["font-size"].slice(0, -2) / 16 + e + "em";
    (a.style.fontSize = t),
      (n.fontSize = t),
      m(n),
      ga("send", "event", "Font size", this.id);
  }
  function u() {
    var e = this.getAttribute("data-font") || "";
    (n.font = e), p(n), ga("send", "event", "Font", this.id);
  }
  function d() {
    var e = this.getAttribute("data-theme") || "";
    (n.theme = e), p(n), ga("send", "event", "Theme", this.id);
  }
  function b() {
    var e = r.querySelector("main") || "";
    "on" === (this.getAttribute("data-pBorders") || "")
      ? ((n.pBorders = "with-borders"), e.classList.add("with-borders"))
      : ((n.pBorders = ""), e.classList.remove("with-borders")),
      m(n),
      ga("send", "event", "Paragraph borders", this.id);
  }
  function p(e) {
    var t = e.font || "",
      r = e.theme || "";
    a.setAttribute("class", t + " " + r), m(e);
  }
  function m(e) {
    r.cookie = "settings=" + JSON.stringify(e);
  }
  Array.prototype.forEach.call(i, function(e) {
    e.addEventListener("click", l);
  }),
    Array.prototype.forEach.call(s, function(e) {
      e.addEventListener("click", u);
    }),
    Array.prototype.forEach.call(o, function(e) {
      e.addEventListener("click", d);
    }),
    Array.prototype.forEach.call(c, function(e) {
      e.addEventListener("click", b);
    });
})(),
  (function(e) {
    var t =
      ("object" == typeof window && window) ||
      ("object" == typeof self && self);
    "undefined" != typeof exports
      ? e(exports)
      : t &&
        ((t.hljs = e({})),
        "function" == typeof define &&
          define.amd &&
          define([], function() {
            return t.hljs;
          }));
  })(function(n) {
    function _(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    function b(e) {
      return e.nodeName.toLowerCase();
    }
    function v(e, t) {
      var r = e && e.exec(t);
      return r && 0 === r.index;
    }
    function p(e) {
      return a.test(e);
    }
    function l(e) {
      var t,
        r = {},
        a = Array.prototype.slice.call(arguments, 1);
      for (t in e) r[t] = e[t];
      return (
        a.forEach(function(e) {
          for (t in e) r[t] = e[t];
        }),
        r
      );
    }
    function m(e) {
      var n = [];
      return (
        (function e(t, r) {
          for (var a = t.firstChild; a; a = a.nextSibling)
            3 === a.nodeType
              ? (r += a.nodeValue.length)
              : 1 === a.nodeType &&
                (n.push({ event: "start", offset: r, node: a }),
                (r = e(a, r)),
                b(a).match(/br|hr|img|input/) ||
                  n.push({ event: "stop", offset: r, node: a }));
          return r;
        })(e, 0),
        n
      );
    }
    function y(s) {
      function o(e) {
        return (e && e.source) || e;
      }
      function c(e, t) {
        return new RegExp(o(e), "m" + (s.cI ? "i" : "") + (t ? "g" : ""));
      }
      !(function t(r, e) {
        if (!r.compiled) {
          if (((r.compiled = !0), (r.k = r.k || r.bK), r.k)) {
            var a = {},
              n = function(r, e) {
                s.cI && (e = e.toLowerCase()),
                  e.split(" ").forEach(function(e) {
                    var t = e.split("|");
                    a[t[0]] = [r, t[1] ? Number(t[1]) : 1];
                  });
              };
            "string" == typeof r.k
              ? n("keyword", r.k)
              : u(r.k).forEach(function(e) {
                  n(e, r.k[e]);
                }),
              (r.k = a);
          }
          (r.lR = c(r.l || /\w+/, !0)),
            e &&
              (r.bK && (r.b = "\\b(" + r.bK.split(" ").join("|") + ")\\b"),
              r.b || (r.b = /\B|\b/),
              (r.bR = c(r.b)),
              r.e || r.eW || (r.e = /\B|\b/),
              r.e && (r.eR = c(r.e)),
              (r.tE = o(r.e) || ""),
              r.eW && e.tE && (r.tE += (r.e ? "|" : "") + e.tE)),
            r.i && (r.iR = c(r.i)),
            null == r.r && (r.r = 1),
            r.c || (r.c = []),
            (r.c = Array.prototype.concat.apply(
              [],
              r.c.map(function(e) {
                return (
                  (t = "self" === e ? r : e).v &&
                    !t.cached_variants &&
                    (t.cached_variants = t.v.map(function(e) {
                      return l(t, { v: null }, e);
                    })),
                  t.cached_variants || (t.eW && [l(t)]) || [t]
                );
                var t;
              })
            )),
            r.c.forEach(function(e) {
              t(e, r);
            }),
            r.starts && t(r.starts, e);
          var i = r.c
            .map(function(e) {
              return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
            })
            .concat([r.tE, r.i])
            .map(o)
            .filter(Boolean);
          r.t = i.length
            ? c(i.join("|"), !0)
            : {
                exec: function() {
                  return null;
                }
              };
        }
      })(s);
    }
    function w(e, t, o, r) {
      function c(e, t, r, a) {
        var n = '<span class="' + (a ? "" : z.classPrefix);
        return (n += e + '">') + t + (r ? "" : M);
      }
      function l() {
        (p +=
          null != b.sL
            ? (function() {
                var e = "string" == typeof b.sL;
                if (e && !k[b.sL]) return _(m);
                var t = e
                  ? w(b.sL, m, !0, i[b.sL])
                  : x(m, b.sL.length ? b.sL : void 0);
                return (
                  0 < b.r && (f += t.r),
                  e && (i[b.sL] = t.top),
                  c(t.language, t.value, !1, !0)
                );
              })()
            : (function() {
                var e, t, r, a, n, i, s;
                if (!b.k) return _(m);
                for (a = "", t = 0, b.lR.lastIndex = 0, r = b.lR.exec(m); r; )
                  (a += _(m.substring(t, r.index))),
                    (n = b),
                    (i = r),
                    (s = d.cI ? i[0].toLowerCase() : i[0]),
                    (e = n.k.hasOwnProperty(s) && n.k[s])
                      ? ((f += e[1]), (a += c(e[0], _(r[0]))))
                      : (a += _(r[0])),
                    (t = b.lR.lastIndex),
                    (r = b.lR.exec(m));
                return a + _(m.substr(t));
              })()),
          (m = "");
      }
      function u(e) {
        (p += e.cN ? c(e.cN, "", !0) : ""),
          (b = Object.create(e, { parent: { value: b } }));
      }
      function a(e, t) {
        if (((m += e), null == t)) return l(), 0;
        var r = (function(e, t) {
          var r, a;
          for (r = 0, a = t.c.length; r < a; r++)
            if (v(t.c[r].bR, e)) return t.c[r];
        })(t, b);
        if (r)
          return (
            r.skip
              ? (m += t)
              : (r.eB && (m += t), l(), r.rB || r.eB || (m = t)),
            u(r),
            r.rB ? 0 : t.length
          );
        var a,
          n,
          i = (function e(t, r) {
            if (v(t.eR, r)) {
              for (; t.endsParent && t.parent; ) t = t.parent;
              return t;
            }
            return t.eW ? e(t.parent, r) : void 0;
          })(b, t);
        if (i) {
          var s = b;
          for (
            s.skip
              ? (m += t)
              : (s.rE || s.eE || (m += t), l(), s.eE && (m = t));
            b.cN && (p += M), b.skip || (f += b.r), (b = b.parent) !== i.parent;

          );
          return i.starts && u(i.starts), s.rE ? 0 : t.length;
        }
        if (((a = t), (n = b), !o && v(n.iR, a)))
          throw new Error(
            'Illegal lexeme "' +
              t +
              '" for mode "' +
              (b.cN || "<unnamed>") +
              '"'
          );
        return (m += t), t.length || 1;
      }
      var d = N(e);
      if (!d) throw new Error('Unknown language: "' + e + '"');
      y(d);
      var n,
        b = r || d,
        i = {},
        p = "";
      for (n = b; n !== d; n = n.parent) n.cN && (p = c(n.cN, "", !0) + p);
      var m = "",
        f = 0;
      try {
        for (var s, g, h = 0; (b.t.lastIndex = h), (s = b.t.exec(t)); )
          (g = a(t.substring(h, s.index), s[0])), (h = s.index + g);
        for (a(t.substr(h)), n = b; n.parent; n = n.parent) n.cN && (p += M);
        return { r: f, value: p, language: e, top: b };
      } catch (e) {
        if (e.message && -1 !== e.message.indexOf("Illegal"))
          return { r: 0, value: _(t) };
        throw e;
      }
    }
    function x(r, e) {
      e = e || z.languages || u(k);
      var a = { r: 0, value: _(r) },
        n = a;
      return (
        e.filter(N).forEach(function(e) {
          var t = w(e, r, !1);
          (t.language = e),
            t.r > n.r && (n = t),
            t.r > a.r && ((n = a), (a = t));
        }),
        n.language && (a.second_best = n),
        a
      );
    }
    function f(e) {
      return z.tabReplace || z.useBR
        ? e.replace(i, function(e, t) {
            return z.useBR && "\n" === e
              ? "<br>"
              : z.tabReplace
                ? t.replace(/\t/g, z.tabReplace)
                : "";
          })
        : e;
    }
    function t(e) {
      var t,
        r,
        a,
        n,
        i,
        s,
        o,
        c,
        l,
        u,
        d = (function(e) {
          var t,
            r,
            a,
            n,
            i = e.className + " ";
          if (
            ((i += e.parentNode ? e.parentNode.className : ""), (r = E.exec(i)))
          )
            return N(r[1]) ? r[1] : "no-highlight";
          for (t = 0, a = (i = i.split(/\s+/)).length; t < a; t++)
            if (p((n = i[t])) || N(n)) return n;
        })(e);
      p(d) ||
        (z.useBR
          ? ((t = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "div"
            )).innerHTML = e.innerHTML
              .replace(/\n/g, "")
              .replace(/<br[ \/]*>/g, "\n"))
          : (t = e),
        (i = t.textContent),
        (a = d ? w(d, i, !0) : x(i)),
        (r = m(t)).length &&
          (((n = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "div"
          )).innerHTML = a.value),
          (a.value = (function(e, t, r) {
            function a() {
              return e.length && t.length
                ? e[0].offset !== t[0].offset
                  ? e[0].offset < t[0].offset
                    ? e
                    : t
                  : "start" === t[0].event
                    ? e
                    : t
                : e.length
                  ? e
                  : t;
            }
            function n(e) {
              c +=
                "<" +
                b(e) +
                g.map
                  .call(e.attributes, function(e) {
                    return (
                      " " +
                      e.nodeName +
                      '="' +
                      _(e.value).replace('"', "&quot;") +
                      '"'
                    );
                  })
                  .join("") +
                ">";
            }
            function i(e) {
              c += "</" + b(e) + ">";
            }
            function s(e) {
              ("start" === e.event ? n : i)(e.node);
            }
            for (var o = 0, c = "", l = []; e.length || t.length; ) {
              var u = a();
              if (
                ((c += _(r.substring(o, u[0].offset))),
                (o = u[0].offset),
                u === e)
              ) {
                for (
                  l.reverse().forEach(i);
                  s(u.splice(0, 1)[0]),
                    (u = a()) === e && u.length && u[0].offset === o;

                );
                l.reverse().forEach(n);
              } else
                "start" === u[0].event ? l.push(u[0].node) : l.pop(),
                  s(u.splice(0, 1)[0]);
            }
            return c + _(r.substr(o));
          })(r, m(n), i))),
        (a.value = f(a.value)),
        (e.innerHTML = a.value),
        (e.className = ((s = e.className),
        (o = d),
        (c = a.language),
        (l = o ? h[o] : c),
        (u = [s.trim()]),
        s.match(/\bhljs\b/) || u.push("hljs"),
        -1 === s.indexOf(l) && u.push(l),
        u.join(" ").trim())),
        (e.result = { language: a.language, re: a.r }),
        a.second_best &&
          (e.second_best = {
            language: a.second_best.language,
            re: a.second_best.r
          }));
    }
    function r() {
      if (!r.called) {
        r.called = !0;
        var e = document.querySelectorAll("pre code");
        g.forEach.call(e, t);
      }
    }
    function N(e) {
      return (e = (e || "").toLowerCase()), k[e] || k[h[e]];
    }
    var g = [],
      u = Object.keys,
      k = {},
      h = {},
      a = /^(no-?highlight|plain|text)$/i,
      E = /\blang(?:uage)?-([\w-]+)\b/i,
      i = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
      M = "</span>",
      z = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
      };
    return (
      (n.highlight = w),
      (n.highlightAuto = x),
      (n.fixMarkup = f),
      (n.highlightBlock = t),
      (n.configure = function(e) {
        z = l(z, e);
      }),
      (n.initHighlighting = r),
      (n.initHighlightingOnLoad = function() {
        addEventListener("DOMContentLoaded", r, !1),
          addEventListener("load", r, !1);
      }),
      (n.registerLanguage = function(t, e) {
        var r = (k[t] = e(n));
        r.aliases &&
          r.aliases.forEach(function(e) {
            h[e] = t;
          });
      }),
      (n.listLanguages = function() {
        return u(k);
      }),
      (n.getLanguage = N),
      (n.inherit = l),
      (n.IR = "[a-zA-Z]\\w*"),
      (n.UIR = "[a-zA-Z_]\\w*"),
      (n.NR = "\\b\\d+(\\.\\d+)?"),
      (n.CNR =
        "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
      (n.BNR = "\\b(0b[01]+)"),
      (n.RSR =
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
      (n.BE = { b: "\\\\[\\s\\S]", r: 0 }),
      (n.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [n.BE] }),
      (n.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [n.BE] }),
      (n.PWM = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      }),
      (n.C = function(e, t, r) {
        var a = n.inherit({ cN: "comment", b: e, e: t, c: [] }, r || {});
        return (
          a.c.push(n.PWM),
          a.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }),
          a
        );
      }),
      (n.CLCM = n.C("//", "$")),
      (n.CBCM = n.C("/\\*", "\\*/")),
      (n.HCM = n.C("#", "$")),
      (n.NM = { cN: "number", b: n.NR, r: 0 }),
      (n.CNM = { cN: "number", b: n.CNR, r: 0 }),
      (n.BNM = { cN: "number", b: n.BNR, r: 0 }),
      (n.CSSNM = {
        cN: "number",
        b:
          n.NR +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
      }),
      (n.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [n.BE, { b: /\[/, e: /\]/, r: 0, c: [n.BE] }]
      }),
      (n.TM = { cN: "title", b: n.IR, r: 0 }),
      (n.UTM = { cN: "title", b: n.UIR, r: 0 }),
      (n.METHOD_GUARD = { b: "\\.\\s*" + n.UIR, r: 0 }),
      n
    );
  }),
  hljs.registerLanguage("sql", function(e) {
    var t = e.C("--", "$");
    return {
      cI: !0,
      i: /[<>{}*#]/,
      c: [
        {
          bK:
            "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
          e: /;/,
          eW: !0,
          l: /[\w\.]+/,
          k: {
            keyword:
              "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
            literal: "true false null",
            built_in:
              "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
          },
          c: [
            { cN: "string", b: "'", e: "'", c: [e.BE, { b: "''" }] },
            { cN: "string", b: '"', e: '"', c: [e.BE, { b: '""' }] },
            { cN: "string", b: "`", e: "`", c: [e.BE] },
            e.CNM,
            e.CBCM,
            t
          ]
        },
        e.CBCM,
        t
      ]
    };
  }),
  hljs.registerLanguage("php", function(e) {
    var t = { b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" },
      r = { cN: "meta", b: /<\?(php)?|\?>/ },
      a = {
        cN: "string",
        c: [e.BE, r],
        v: [
          { b: 'b"', e: '"' },
          { b: "b'", e: "'" },
          e.inherit(e.ASM, { i: null }),
          e.inherit(e.QSM, { i: null })
        ]
      },
      n = { v: [e.BNM, e.CNM] };
    return {
      aliases: ["php3", "php4", "php5", "php6"],
      cI: !0,
      k:
        "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
      c: [
        e.HCM,
        e.C("//", "$", { c: [r] }),
        e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }),
        e.C("__halt_compiler.+?;", !1, {
          eW: !0,
          k: "__halt_compiler",
          l: e.UIR
        }),
        {
          cN: "string",
          b: /<<<['"]?\w+['"]?$/,
          e: /^\w+;?$/,
          c: [
            e.BE,
            { cN: "subst", v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] }
          ]
        },
        r,
        { cN: "keyword", b: /\$this\b/ },
        t,
        { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
        {
          cN: "function",
          bK: "function",
          e: /[;{]/,
          eE: !0,
          i: "\\$|\\[|%",
          c: [
            e.UTM,
            { cN: "params", b: "\\(", e: "\\)", c: ["self", t, e.CBCM, a, n] }
          ]
        },
        {
          cN: "class",
          bK: "class interface",
          e: "{",
          eE: !0,
          i: /[:\(\$"]/,
          c: [{ bK: "extends implements" }, e.UTM]
        },
        { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] },
        { bK: "use", e: ";", c: [e.UTM] },
        { b: "=>" },
        a,
        n
      ]
    };
  }),
  hljs.registerLanguage("json", function(e) {
    var t = { literal: "true false null" },
      r = [e.QSM, e.CNM],
      a = { e: ",", eW: !0, eE: !0, c: r, k: t },
      n = {
        b: "{",
        e: "}",
        c: [
          { cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n" },
          e.inherit(a, { b: /:/ })
        ],
        i: "\\S"
      },
      i = { b: "\\[", e: "\\]", c: [e.inherit(a)], i: "\\S" };
    return r.splice(r.length, 0, n, i), { c: r, k: t, i: "\\S" };
  }),
  hljs.registerLanguage("http", function(e) {
    var t = "HTTP/[0-9\\.]+";
    return {
      aliases: ["https"],
      i: "\\S",
      c: [
        { b: "^" + t, e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] },
        {
          b: "^[A-Z]+ (.*?) " + t + "$",
          rB: !0,
          e: "$",
          c: [
            { cN: "string", b: " ", e: " ", eB: !0, eE: !0 },
            { b: t },
            { cN: "keyword", b: "[A-Z]+" }
          ]
        },
        {
          cN: "attribute",
          b: "^\\w",
          e: ": ",
          eE: !0,
          i: "\\n|\\s|=",
          starts: { e: "$", r: 0 }
        },
        { b: "\\n\\n", starts: { sL: [], eW: !0 } }
      ]
    };
  }),
  hljs.registerLanguage("bash", function(e) {
    var t = {
        cN: "variable",
        v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }]
      },
      r = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }]
      };
    return {
      aliases: ["sh", "zsh"],
      l: /\b-?[a-z\._]+\b/,
      k: {
        keyword: "if then else elif fi for while in do done case esac function",
        literal: "true false",
        built_in:
          "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
        _: "-ne -eq -lt -gt -f -d -e -s -l -a"
      },
      c: [
        { cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10 },
        {
          cN: "function",
          b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
          rB: !0,
          c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })],
          r: 0
        },
        e.HCM,
        r,
        { cN: "string", b: /'/, e: /'/ },
        t
      ]
    };
  }),
  hljs.registerLanguage("javascript", function(e) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*",
      r = {
        keyword:
          "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
        literal: "true false null undefined NaN Infinity",
        built_in:
          "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
      },
      a = {
        cN: "number",
        v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }],
        r: 0
      },
      n = { cN: "subst", b: "\\$\\{", e: "\\}", k: r, c: [] },
      i = { cN: "string", b: "`", e: "`", c: [e.BE, n] };
    n.c = [e.ASM, e.QSM, i, a, e.RM];
    var s = n.c.concat([e.CBCM, e.CLCM]);
    return {
      aliases: ["js", "jsx"],
      k: r,
      c: [
        { cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/ },
        { cN: "meta", b: /^#!/, e: /$/ },
        e.ASM,
        e.QSM,
        i,
        e.CLCM,
        e.CBCM,
        a,
        {
          b: /[{,]\s*/,
          r: 0,
          c: [{ b: t + "\\s*:", rB: !0, r: 0, c: [{ cN: "attr", b: t, r: 0 }] }]
        },
        {
          b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
          k: "return throw case",
          c: [
            e.CLCM,
            e.CBCM,
            e.RM,
            {
              cN: "function",
              b: "(\\(.*?\\)|" + t + ")\\s*=>",
              rB: !0,
              e: "\\s*=>",
              c: [
                {
                  cN: "params",
                  v: [
                    { b: t },
                    { b: /\(\s*\)/ },
                    { b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: s }
                  ]
                }
              ]
            },
            {
              b: /</,
              e: /(\/\w+|\w+\/)>/,
              sL: "xml",
              c: [
                { b: /<\w+\s*\/>/, skip: !0 },
                {
                  b: /<\w+/,
                  e: /(\/\w+|\w+\/)>/,
                  skip: !0,
                  c: [{ b: /<\w+\s*\/>/, skip: !0 }, "self"]
                }
              ]
            }
          ],
          r: 0
        },
        {
          cN: "function",
          bK: "function",
          e: /\{/,
          eE: !0,
          c: [
            e.inherit(e.TM, { b: t }),
            { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s }
          ],
          i: /\[|%/
        },
        { b: /\$[(.]/ },
        e.METHOD_GUARD,
        {
          cN: "class",
          bK: "class",
          e: /[{;=]/,
          eE: !0,
          i: /[:"\[\]]/,
          c: [{ bK: "extends" }, e.UTM]
        },
        { bK: "constructor", e: /\{/, eE: !0 }
      ],
      i: /#(?!!)/
    };
  }),
  hljs.registerLanguage("xml", function(e) {
    var t = {
      eW: !0,
      i: /</,
      r: 0,
      c: [
        { cN: "attr", b: "[A-Za-z0-9\\._:-]+", r: 0 },
        {
          b: /=\s*/,
          r: 0,
          c: [
            {
              cN: "string",
              endsParent: !0,
              v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }]
            }
          ]
        }
      ]
    };
    return {
      aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
      cI: !0,
      c: [
        {
          cN: "meta",
          b: "<!DOCTYPE",
          e: ">",
          r: 10,
          c: [{ b: "\\[", e: "\\]" }]
        },
        e.C("\x3c!--", "--\x3e", { r: 10 }),
        { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
        {
          b: /<\?(php)?/,
          e: /\?>/,
          sL: "php",
          c: [{ b: "/\\*", e: "\\*/", skip: !0 }]
        },
        {
          cN: "tag",
          b: "<style(?=\\s|>|$)",
          e: ">",
          k: { name: "style" },
          c: [t],
          starts: { e: "</style>", rE: !0, sL: ["css", "xml"] }
        },
        {
          cN: "tag",
          b: "<script(?=\\s|>|$)",
          e: ">",
          k: { name: "script" },
          c: [t],
          starts: {
            e: "</script>",
            rE: !0,
            sL: ["actionscript", "javascript", "handlebars", "xml"]
          }
        },
        {
          cN: "meta",
          v: [{ b: /<\?xml/, e: /\?>/, r: 10 }, { b: /<\?\w+/, e: /\?>/ }]
        },
        {
          cN: "tag",
          b: "</?",
          e: "/?>",
          c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, t]
        }
      ]
    };
  }),
  hljs.registerLanguage("handlebars", function(e) {
    var t = {
      "builtin-name":
        "each in with if else unless bindattr action collection debugger log outlet template unbound view yield"
    };
    return {
      aliases: ["hbs", "html.hbs", "html.handlebars"],
      cI: !0,
      sL: "xml",
      c: [
        e.C("{{!(--)?", "(--)?}}"),
        {
          cN: "template-tag",
          b: /\{\{[#\/]/,
          e: /\}\}/,
          c: [
            {
              cN: "name",
              b: /[a-zA-Z\.-]+/,
              k: t,
              starts: { eW: !0, r: 0, c: [e.QSM] }
            }
          ]
        },
        { cN: "template-variable", b: /\{\{/, e: /\}\}/, k: t }
      ]
    };
  }),
  hljs.registerLanguage("markdown", function(e) {
    return {
      aliases: ["md", "mkdown", "mkd"],
      c: [
        {
          cN: "section",
          v: [{ b: "^#{1,6}", e: "$" }, { b: "^.+?\\n[=-]{2,}$" }]
        },
        { b: "<", e: ">", sL: "xml", r: 0 },
        { cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+" },
        { cN: "strong", b: "[*_]{2}.+?[*_]{2}" },
        { cN: "emphasis", v: [{ b: "\\*.+?\\*" }, { b: "_.+?_", r: 0 }] },
        { cN: "quote", b: "^>\\s+", e: "$" },
        {
          cN: "code",
          v: [
            { b: "^```w*s*$", e: "^```s*$" },
            { b: "`.+?`" },
            { b: "^( {4}|\t)", e: "$", r: 0 }
          ]
        },
        { b: "^[-\\*]{3,}", e: "$" },
        {
          b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
          rB: !0,
          c: [
            { cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0 },
            { cN: "link", b: "\\]\\(", e: "\\)", eB: !0, eE: !0 },
            { cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0 }
          ],
          r: 10
        },
        {
          b: /^\[[^\n]+\]:/,
          rB: !0,
          c: [
            { cN: "symbol", b: /\[/, e: /\]/, eB: !0, eE: !0 },
            { cN: "link", b: /:\s*/, e: /$/, eB: !0 }
          ]
        }
      ]
    };
  }),
  hljs.registerLanguage("htmlbars", function(e) {
    var t =
        "action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view",
      r = (e.QSM,
      {
        eW: !0,
        r: 0,
        k: { keyword: "as", built_in: t },
        c: [
          e.QSM,
          {
            i: /\}\}/,
            b: /[a-zA-Z0-9_]+=/,
            rB: !0,
            r: 0,
            c: [{ cN: "attr", b: /[a-zA-Z0-9_]+/ }]
          },
          e.NM
        ]
      });
    return {
      cI: !0,
      sL: "xml",
      c: [
        e.C("{{!(--)?", "(--)?}}"),
        {
          cN: "template-tag",
          b: /\{\{[#\/]/,
          e: /\}\}/,
          c: [
            {
              cN: "name",
              b: /[a-zA-Z\.\-]+/,
              k: { "builtin-name": t },
              starts: r
            }
          ]
        },
        {
          cN: "template-variable",
          b: /\{\{[a-zA-Z][a-zA-Z\-]+/,
          e: /\}\}/,
          k: { keyword: "as", built_in: t },
          c: [e.QSM]
        }
      ]
    };
  }),
  hljs.registerLanguage("shell", function(e) {
    return {
      aliases: ["console"],
      c: [
        {
          cN: "meta",
          b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
          starts: { e: "$", sL: "bash" }
        }
      ]
    };
  }),
  hljs.registerLanguage("css", function(e) {
    var t = {
      b: /[A-Z\_\.\-]+\s*:/,
      rB: !0,
      e: ";",
      eW: !0,
      c: [
        {
          cN: "attribute",
          b: /\S/,
          e: ":",
          eE: !0,
          starts: {
            eW: !0,
            eE: !0,
            c: [
              {
                b: /[\w-]+\(/,
                rB: !0,
                c: [
                  { cN: "built_in", b: /[\w-]+/ },
                  { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] }
                ]
              },
              e.CSSNM,
              e.QSM,
              e.ASM,
              e.CBCM,
              { cN: "number", b: "#[0-9A-Fa-f]+" },
              { cN: "meta", b: "!important" }
            ]
          }
        }
      ]
    };
    return {
      cI: !0,
      i: /[=\/|'\$]/,
      c: [
        e.CBCM,
        { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ },
        { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ },
        { cN: "selector-attr", b: /\[/, e: /\]/, i: "$" },
        { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
        { b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" },
        {
          b: "@",
          e: "[{;]",
          i: /:/,
          c: [
            { cN: "keyword", b: /\w+/ },
            { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] }
          ]
        },
        { cN: "selector-tag", b: "[a-zA-Z-][a-zA-Z0-9_-]*", r: 0 },
        { b: "{", e: "}", i: /\S/, c: [e.CBCM, t] }
      ]
    };
  }),
  hljs.registerLanguage("ruby", function(e) {
    var t =
        "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
      r = {
        keyword:
          "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
        literal: "true false nil"
      },
      a = { cN: "doctag", b: "@[A-Za-z]+" },
      n = { b: "#<", e: ">" },
      i = [
        e.C("#", "$", { c: [a] }),
        e.C("^\\=begin", "^\\=end", { c: [a], r: 10 }),
        e.C("^__END__", "\\n$")
      ],
      s = { cN: "subst", b: "#\\{", e: "}", k: r },
      o = {
        cN: "string",
        c: [e.BE, s],
        v: [
          { b: /'/, e: /'/ },
          { b: /"/, e: /"/ },
          { b: /`/, e: /`/ },
          { b: "%[qQwWx]?\\(", e: "\\)" },
          { b: "%[qQwWx]?\\[", e: "\\]" },
          { b: "%[qQwWx]?{", e: "}" },
          { b: "%[qQwWx]?<", e: ">" },
          { b: "%[qQwWx]?/", e: "/" },
          { b: "%[qQwWx]?%", e: "%" },
          { b: "%[qQwWx]?-", e: "-" },
          { b: "%[qQwWx]?\\|", e: "\\|" },
          {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
          },
          { b: /<<(-?)\w+$/, e: /^\s*\w+$/ }
        ]
      },
      c = { cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: r },
      l = [
        o,
        n,
        {
          cN: "class",
          bK: "class module",
          e: "$|;",
          i: /=/,
          c: [
            e.inherit(e.TM, { b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }),
            { b: "<\\s*", c: [{ b: "(" + e.IR + "::)?" + e.IR }] }
          ].concat(i)
        },
        {
          cN: "function",
          bK: "def",
          e: "$|;",
          c: [e.inherit(e.TM, { b: t }), c].concat(i)
        },
        { b: e.IR + "::" },
        { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0 },
        { cN: "symbol", b: ":(?!\\s)", c: [o, { b: t }], r: 0 },
        {
          cN: "number",
          b:
            "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
          r: 0
        },
        { b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
        { cN: "params", b: /\|/, e: /\|/, k: r },
        {
          b: "(" + e.RSR + "|unless)\\s*",
          k: "unless",
          c: [
            n,
            {
              cN: "regexp",
              c: [e.BE, s],
              i: /\n/,
              v: [
                { b: "/", e: "/[a-z]*" },
                { b: "%r{", e: "}[a-z]*" },
                { b: "%r\\(", e: "\\)[a-z]*" },
                { b: "%r!", e: "![a-z]*" },
                { b: "%r\\[", e: "\\][a-z]*" }
              ]
            }
          ].concat(i),
          r: 0
        }
      ].concat(i);
    s.c = l;
    var u = [
      { b: /^\s*=>/, starts: { e: "$", c: (c.c = l) } },
      {
        cN: "meta",
        b:
          "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
        starts: { e: "$", c: l }
      }
    ];
    return {
      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
      k: r,
      i: /\/\*/,
      c: i.concat(u).concat(l)
    };
  }),
  hljs.registerLanguage("haml", function(e) {
    return {
      cI: !0,
      c: [
        {
          cN: "meta",
          b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
          r: 10
        },
        e.C("^\\s*(!=#|=#|-#|/).*$", !1, { r: 0 }),
        { b: "^\\s*(-|=|!=)(?!#)", starts: { e: "\\n", sL: "ruby" } },
        {
          cN: "tag",
          b: "^\\s*%",
          c: [
            { cN: "selector-tag", b: "\\w+" },
            { cN: "selector-id", b: "#[\\w-]+" },
            { cN: "selector-class", b: "\\.[\\w-]+" },
            {
              b: "{\\s*",
              e: "\\s*}",
              c: [
                {
                  b: ":\\w+\\s*=>",
                  e: ",\\s+",
                  rB: !0,
                  eW: !0,
                  c: [
                    { cN: "attr", b: ":\\w+" },
                    e.ASM,
                    e.QSM,
                    { b: "\\w+", r: 0 }
                  ]
                }
              ]
            },
            {
              b: "\\(\\s*",
              e: "\\s*\\)",
              eE: !0,
              c: [
                {
                  b: "\\w+\\s*=",
                  e: "\\s+",
                  rB: !0,
                  eW: !0,
                  c: [
                    { cN: "attr", b: "\\w+", r: 0 },
                    e.ASM,
                    e.QSM,
                    { b: "\\w+", r: 0 }
                  ]
                }
              ]
            }
          ]
        },
        { b: "^\\s*[=~]\\s*" },
        { b: "#{", starts: { e: "}", sL: "ruby" } }
      ]
    };
  });
